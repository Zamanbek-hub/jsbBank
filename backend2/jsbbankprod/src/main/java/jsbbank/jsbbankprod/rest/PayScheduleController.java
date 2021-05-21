package jsbbank.jsbbankprod.rest;

import jsbbank.jsbbankprod.entities.PaySchedule;
import jsbbank.jsbbankprod.entities.Program;
import jsbbank.jsbbankprod.entities.Users;
import jsbbank.jsbbankprod.services.PayScheduleService;
import jsbbank.jsbbankprod.services.ProgramService;
import jsbbank.jsbbankprod.services.RolesService;
import jsbbank.jsbbankprod.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.Calendar;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin("*")
@RequestMapping(value = "/pay_schedule")
public class PayScheduleController {
    @Autowired
    private UserService userService;

    @Autowired
    private RolesService rolesService;

    @Autowired
    private ProgramService programService;

    @Autowired
    private PayScheduleService payScheduleService;

    @GetMapping("/get_payed")
    public List<PaySchedule> getPayed(@RequestParam("program_id") Long program_id) {
        Users user = getUser();
        Program program = programService.findProgramById(program_id);
        List<PaySchedule> payed =  payScheduleService.findAllByUserAndProgramAndPaidEquals(user, program, true);
        if(payed.size() > 3) {
            return payed.subList(0, 3);
        }
        return payed;
    }

    @GetMapping("/get_not_payed")
    public List<PaySchedule> getNontPayed(@RequestParam("program_id") Long program_id) {
        Users user = getUser();
        Program program = programService.findProgramById(program_id);
        List<PaySchedule> not_payed = payScheduleService.findAllByUserAndProgramAndPaidEquals(user, program, false);
        return not_payed;
    }

    @GetMapping("/get_not_payed_first")
    public PaySchedule getNotPayedFirst() {
        Users user = getUser();
        assert user != null;
        List<Program> programs = programService.findAllPrograms();
        for(Program program: programs){
            List<Users> program_users = program.getUsers();
            for(Users p_user: program_users){
                if(p_user.getId().equals(user.getId())){
                    List<PaySchedule> not_payed = payScheduleService.findAllByUserAndProgramAndPaidEquals(user, program, false);
                    if(not_payed.size() > 0)
                        return not_payed.get(0);
                }
            }
        }

        return null;
    }

    @GetMapping("/get_attached_program")
    public Program getAttachedProgram() {
        Users user = getUser();
        assert user != null;
        List<Program> programs = programService.findAllPrograms();
        for(Program program: programs){
            List<Users> program_users = program.getUsers();
            for(Users p_user: program_users){
                if(p_user.getId().equals(user.getId())){
                    return program;
                }
            }
        }

        return null;
    }

    @PostMapping(value = "/pay_debt")
    public PaySchedule payDebt(@RequestBody Map<String, String> data){
        PaySchedule paySchedule = payScheduleService.findByID(Long.parseLong(data.get("id")));
        paySchedule.setPaid(true);
        return payScheduleService.save(paySchedule);
    }

    private Users getUser(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if(!(authentication instanceof AnonymousAuthenticationToken)){
            return (Users) authentication.getPrincipal();
        }
        return null;
    }

}
