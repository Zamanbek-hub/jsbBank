package jsbbank.jsbbankprod.services.impl;

import jsbbank.jsbbankprod.entities.Invest;
import jsbbank.jsbbankprod.entities.Users;
import jsbbank.jsbbankprod.repositories.InvestRepository;
import jsbbank.jsbbankprod.repositories.UserRepository;
import jsbbank.jsbbankprod.services.InvestService;
import jsbbank.jsbbankprod.services.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class InvestServiceImpl implements InvestService {
    @Autowired
    private InvestRepository investRepository;

    @Override
    public List<Invest> findAllByUser(Users user) {
        return investRepository.findAllByUser(user);
    }

    @Override
    public Invest saveInvest(Invest invest) {
        return investRepository.save(invest);
    }
}
