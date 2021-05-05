package jsbbank.jsbbankprod.rest;

import jsbbank.jsbbankprod.entities.Invest;
import jsbbank.jsbbankprod.entities.Users;
import jsbbank.jsbbankprod.services.InvestService;
import jsbbank.jsbbankprod.services.RolesService;
import jsbbank.jsbbankprod.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping(value = "/invest")
public class InvestController {

    @Autowired
    private UserService userService;

    @Autowired
    private RolesService rolesService;

    @Autowired
    private InvestService investService;

    private Users getUser(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if(!(authentication instanceof AnonymousAuthenticationToken)){
            Users user = (Users) authentication.getPrincipal();
            System.out.println("I WAS HERE1");
            return user;
        }
        System.out.println("I WAS HERE RETURN NULL");
        return null;
    }

    @GetMapping(value = "/my_last")
    public Invest profilePage(){
        Users user = getUser();
        List<Invest> invests = investService.findAllByUser(user);
        if (! invests.isEmpty()) {
            return invests.get(invests.size() - 1);
        }

        return null;
    }
}
