package jsbbank.jsbbankprod.repositories;

import jsbbank.jsbbankprod.entities.Invest;
import jsbbank.jsbbankprod.entities.PaySchedule;
import jsbbank.jsbbankprod.entities.Program;
import jsbbank.jsbbankprod.entities.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
@Transactional
public interface PayScheduleRepository extends JpaRepository<PaySchedule, Long> {
    List<PaySchedule> findAllByUserAndProgramAndPaidEquals(Users user, Program program, boolean paid);
}
