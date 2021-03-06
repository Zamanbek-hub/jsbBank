package jsbbank.jsbbankprod.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Date;
import java.util.List;

@Entity
@Table(name = "programs")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Program {
    public Program(String name, double loan_rate, double initial_fond, long loan_term, long loan_amount, Date stamp) {
        this.name = name;
        this.loan_rate = loan_rate;
        this.initial_fond = initial_fond;
        this.loan_term = loan_term;
        this.loan_amount = loan_amount;
        this.stamp = stamp;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "description", length = 1000)
    private String description;

    @Column(name = "loan_rate")
    private double loan_rate;

    @Column(name = "initial_fond")
    private double initial_fond;

    @Column(name = "loan_term")
    private long loan_term;

    @Column(name = "loan_amount")
    private long loan_amount;

    @Column(name = "stamp")
    private Date stamp;

    @ManyToMany(fetch = FetchType.EAGER)
    private List<Users> users;

    @Override
    public String toString() {
        return "Program{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", loan_rate=" + loan_rate +
                ", initial_fond=" + initial_fond +
                ", loan_term=" + loan_term +
                ", loan_amount=" + loan_amount +
                ", stamp=" + stamp +
                '}';
    }
}
