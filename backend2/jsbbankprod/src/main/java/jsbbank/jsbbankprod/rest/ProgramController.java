package jsbbank.jsbbankprod.rest;

import jsbbank.jsbbankprod.entities.Invest;
import jsbbank.jsbbankprod.entities.Program;
import jsbbank.jsbbankprod.entities.Users;
import jsbbank.jsbbankprod.services.InvestService;
import jsbbank.jsbbankprod.services.ProgramService;
import jsbbank.jsbbankprod.services.RolesService;
import jsbbank.jsbbankprod.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
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

    @GetMapping("/get")
    public Program getProgram(@RequestParam("id") Long id) {
        return programService.findProgramById(id);
    }

    @PostMapping(value = "/c")
    public List<Program> attachProgram(@RequestBody Map<String, String> payload){
        Program program = programService.findProgramById(Long.parseLong(payload.get("id")));

        Users user = getUser();
        List<Program> user_programs = user.getPrograms();

        if(! user_programs.contains(program)){
            user_programs.add(program);
        }

        user.setPrograms(user_programs);
        userService.saveUser(user);

        return user_programs;
    }

    private Users getUser(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if(!(authentication instanceof AnonymousAuthenticationToken)){
            Users user = (Users) authentication.getPrincipal();
            return user;
        }
        return null;
    }
}
