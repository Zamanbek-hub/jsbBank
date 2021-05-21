package jsbbank.jsbbankprod.rest;

import jsbbank.jsbbankprod.entities.Invest;
import jsbbank.jsbbankprod.entities.PaySchedule;
import jsbbank.jsbbankprod.entities.Program;
import jsbbank.jsbbankprod.entities.Users;
import jsbbank.jsbbankprod.services.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.sql.Date;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin("*")
@RequestMapping(value = "/program")
public class ProgramController {
    @Autowired
    private UserService userService;

    @Autowired
    private RolesService rolesService;

    @Autowired
    private ProgramService programService;

    @Autowired
    private PayScheduleService payScheduleService;

    @PostMapping(value = "/create_program")
    public Program createProgram(@RequestBody Program program){
        Date date = new Date(System.currentTimeMillis());
        program.setStamp(date);
        return programService.saveProgram(program);
    }

    @PostMapping(value = "/edit_program")
    public Program editProgram(@RequestBody Program program){
        return programService.saveProgram(program);
    }

    @GetMapping(value = "/all")
    public List<Program> findAllPrograms(){
        return programService.findAllPrograms();
    }

    @GetMapping("/is_my")
    public Program isMyProgram(@RequestParam("id") Long id) {
        Users user = getUser();
        Program program = programService.findProgramById(id);
        List<Users> program_users = program.getUsers();

        for(Users p_user: program_users){
            if(p_user.getId().equals(user.getId())){
                return program;

            }
        }

        return null;
    }

    @GetMapping("/get")
    public Program getProgram(@RequestParam("id") Long id) {
        return programService.findProgramById(id);
    }

    @PostMapping(value = "/attach_program")
    public Program attachProgram(@RequestBody Map<String, String> payload){
        Program program = programService.findProgramById(Long.parseLong(payload.get("program_id")));
        Users user = getUser();
        assert user != null;

        List<Users> program_users = program.getUsers();
        program_users.add(user);
        programService.saveProgram(program);

        Calendar cal = Calendar.getInstance();
        Date date = new Date(cal.getTime().getTime());

        PaySchedule initPaySchedule = new PaySchedule();
        initPaySchedule.setAmount(user.getWallet());
        initPaySchedule.setPaid(true);
        initPaySchedule.setProgram(program);
        initPaySchedule.setUser(user);
        initPaySchedule.setStamp(date);
        payScheduleService.save(initPaySchedule);

        double debt = program.getLoan_amount() - user.getWallet();
        long debt_rate = program.getLoan_term() * 12;
        double month_debt = debt / debt_rate;
        month_debt = round(month_debt, 2);

        for(int i = 0; i < debt_rate; i++){
            cal.add(Calendar.MONTH, 1);
            date = new Date(cal.getTime().getTime());

            PaySchedule paySchedule = new PaySchedule();
            paySchedule.setAmount(month_debt);
            paySchedule.setPaid(false);
            paySchedule.setProgram(program);
            paySchedule.setUser(user);
            paySchedule.setStamp(date);

            payScheduleService.save(paySchedule);
        }

        user.setWallet(0);
        userService.saveUser(user);
        return program;
    }

    private Users getUser(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if(!(authentication instanceof AnonymousAuthenticationToken)){
            return (Users) authentication.getPrincipal();
        }
        return null;
    }

    public static double round(double value, int places) {
        if (places < 0) throw new IllegalArgumentException();

        long factor = (long) Math.pow(10, places);
        value = value * factor;
        long tmp = Math.round(value);
        return (double) tmp / factor;
    }
}
