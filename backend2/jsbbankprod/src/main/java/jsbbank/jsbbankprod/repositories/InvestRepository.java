package jsbbank.jsbbankprod.repositories;

import jsbbank.jsbbankprod.entities.Invest;
import jsbbank.jsbbankprod.entities.Roles;
import jsbbank.jsbbankprod.entities.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
@Transactional
public interface InvestRepository extends JpaRepository<Invest, Long> {
    List<Invest> findAllByUser(Users user);
}
