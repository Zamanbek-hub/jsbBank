package jsbbank.jsbbankprod.services;

import jsbbank.jsbbankprod.entities.Invest;
import jsbbank.jsbbankprod.entities.Users;

import java.util.List;

public interface InvestService {
    Invest saveInvest(Invest invest);
    List<Invest> findAllByUser(Users user);
}
