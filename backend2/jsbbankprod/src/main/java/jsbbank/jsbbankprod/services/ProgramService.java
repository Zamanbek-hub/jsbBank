package jsbbank.jsbbankprod.services;

import jsbbank.jsbbankprod.entities.Invest;
import jsbbank.jsbbankprod.entities.Program;
import jsbbank.jsbbankprod.entities.Users;

import java.util.List;
public interface ProgramService {
    Program saveProgram(Program program);
    List<Program> findAllPrograms();
    Program findProgramById(Long Id);

}
