package jsbbank.jsbbankprod.services;

import jsbbank.jsbbankprod.entities.Users;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface  UserService extends UserDetailsService {
    Users saveUser(Users users);
    Users findByEmail(String email);
}

