package jsbbank.jsbbankprod.services;

import jsbbank.jsbbankprod.entities.Roles;
import java.util.List;

public interface RolesService {
    Roles getRole(String role);
    Roles findById(Long id);
    List<Roles> findAll();
}
