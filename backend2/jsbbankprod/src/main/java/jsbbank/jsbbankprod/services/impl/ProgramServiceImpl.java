package jsbbank.jsbbankprod.services.impl;

import jsbbank.jsbbankprod.entities.Program;
import jsbbank.jsbbankprod.repositories.InvestRepository;
import jsbbank.jsbbankprod.repositories.ProgramRepository;
import jsbbank.jsbbankprod.services.ProgramService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProgramServiceImpl implements ProgramService {
    @Autowired
    private ProgramRepository programRepository;

    @Override
    public Program saveProgram(Program program) {
        return programRepository.save(program);
    }

    @Override
    public List<Program> findAllPrograms() {
        return programRepository.findAll();
    }

    @Override
    public Program findProgramById(Long id) {
        return programRepository.findById(id).get();
    }
}
