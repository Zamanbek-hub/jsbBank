package jsbbank.jsbbankprod.rest;

import jsbbank.jsbbankprod.entities.Program;
import jsbbank.jsbbankprod.entities.Roles;
import jsbbank.jsbbankprod.entities.Users;
import jsbbank.jsbbankprod.entities.helpers.RoleEasy;
import jsbbank.jsbbankprod.services.ProgramService;
import jsbbank.jsbbankprod.services.RolesService;
import jsbbank.jsbbankprod.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin("*")
@RequestMapping(value = "/roles")
public class RolesController {
    @Autowired
    private UserService userService;

    @Autowired
    private RolesService rolesService;

    @Autowired
    private ProgramService programService;

    @GetMapping(value = "/get_roles")
    public List<RoleEasy> getRoles(){
        List<Roles> roles = rolesService.findAll();

        Users user = getUser();
        assert user != null;
        List<Roles> user_roles = user.getRoles();

        List<RoleEasy> roles_easy = new ArrayList<>();
        for(Roles role: roles){
            RoleEasy role_easy = new RoleEasy();
            role_easy.setId(role.getId());
            role_easy.setRole(role.getRole());
            role_easy.setHave(user_roles.contains(role));

            roles_easy.add(role_easy);
        }


            return roles_easy;
    }

    @PostMapping(value = "/set_role_to_user")
    public void setRoleToUSer(@RequestBody Map<String, String> payload){
        Roles role = rolesService.getRole(payload.get("role"));

        Users user = getUser();
        assert user != null;
        List<Roles> user_roles = user.getRoles();

        if (user_roles.contains(role)) {
            user_roles.remove(role);
            user.setRoles(user_roles);
            userService.saveUser(user);
        }
        else{
            user_roles.add(role);
            user.setRoles(user_roles);
            userService.saveUser(user);
        }
    }


    @GetMapping(value = "/have_role")
    public boolean haveRole(@RequestParam("role") String role_in) {
        Roles role = rolesService.getRole(role_in);

        Users user = getUser();
        assert user != null;
        List<Roles> user_roles = user.getRoles();

        if (user_roles.contains(role)) {
            return true;
        } else {
            return false;
        }
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
