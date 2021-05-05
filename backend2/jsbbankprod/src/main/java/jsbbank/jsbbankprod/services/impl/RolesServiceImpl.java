package jsbbank.jsbbankprod.services.impl;

import jsbbank.jsbbankprod.entities.Roles;
import jsbbank.jsbbankprod.repositories.RolesRepository;
import jsbbank.jsbbankprod.services.RolesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RolesServiceImpl implements RolesService {
    @Autowired
    private RolesRepository rolesRepository;

    @Override
    public Roles findById(Long id) {
        return rolesRepository.findById(id).get();
    }

    @Override
    public Roles getRole(String role) {
        return rolesRepository.findByRole(role);
    }

    @Override
    public List<Roles> findAll() {
        return rolesRepository.findAll();
    }
}
