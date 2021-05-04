package jsbbank.jsbbankprod.services.impl;

import jsbbank.jsbbankprod.entities.Roles;
import jsbbank.jsbbankprod.repositories.RolesRepository;
import jsbbank.jsbbankprod.services.RolesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RolesServiceImpl implements RolesService {
    @Autowired
    private RolesRepository rolesRepository;

    @Override
    public Roles getRole(String role) {
        return rolesRepository.findByRole(role);
    }
}
