package jsbbank.jsbbankprod.repositories;

import jsbbank.jsbbankprod.entities.Invest;
import jsbbank.jsbbankprod.entities.Program;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;


@Repository
@Transactional
public interface ProgramRepository extends JpaRepository<Program, Long> {

}
