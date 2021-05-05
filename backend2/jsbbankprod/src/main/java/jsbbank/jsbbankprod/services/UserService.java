package jsbbank.jsbbankprod.services;

import jsbbank.jsbbankprod.entities.Users;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.List;

public interface  UserService extends UserDetailsService {
    Users saveUser(Users users);
    Users findByEmail(String email);
    Users findById(Long id);
    List<Users> findAll();
}

