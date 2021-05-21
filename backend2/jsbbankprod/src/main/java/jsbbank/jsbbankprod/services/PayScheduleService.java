package jsbbank.jsbbankprod.services;

import jsbbank.jsbbankprod.entities.PaySchedule;
import jsbbank.jsbbankprod.entities.Program;
import jsbbank.jsbbankprod.entities.Users;

import java.util.List;

public interface PayScheduleService {
    PaySchedule save(PaySchedule paySchedule);
    PaySchedule findByID(Long id);
    List<PaySchedule> findAllByUserAndProgramAndPaidEquals(Users user, Program program, boolean paid);
}
