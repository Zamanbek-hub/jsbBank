package jsbbank.jsbbankprod.services.impl;

import jsbbank.jsbbankprod.entities.PaySchedule;
import jsbbank.jsbbankprod.entities.Program;
import jsbbank.jsbbankprod.entities.Users;
import jsbbank.jsbbankprod.repositories.PayScheduleRepository;
import jsbbank.jsbbankprod.repositories.ProgramRepository;
import jsbbank.jsbbankprod.services.PayScheduleService;
import jsbbank.jsbbankprod.services.ProgramService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PayScheduleImpl implements PayScheduleService {
    @Autowired
    private PayScheduleRepository payScheduleRepository;

    @Override
    public PaySchedule findByID(Long id) {
        return payScheduleRepository.findById(id).get();
    }

    @Override
    public PaySchedule save(PaySchedule paySchedule) {
        return payScheduleRepository.save(paySchedule);
    }

    @Override
    public List<PaySchedule> findAllByUserAndProgramAndPaidEquals(Users user, Program program, boolean paid) {
        return payScheduleRepository.findAllByUserAndProgramAndPaidEquals(user, program, paid);
    }
}
