package jsbbank.jsbbankprod.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "pay_schedules")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class PaySchedule {
    public PaySchedule(double amount, boolean paid, Date date, Date stamp, Users user, Program program) {
        this.amount = amount;
        this.paid = paid;
        this.date = date;
        this.stamp = stamp;
        this.user = user;
        this.program = program;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "amount")
    private double amount;

    @Column(name = "paid")
    private boolean paid;

    @Column(name = "date")
    private Date date;

    @Column(name = "stamp")
    private Date stamp;

    @ManyToOne(fetch = FetchType.LAZY, optional=true)
    private Users user;

    @ManyToOne(fetch = FetchType.LAZY, optional=true)
    private Program program;

    @Override
    public String toString() {
        return "PaySchedule{" +
                "id=" + id +
                ", amount=" + amount +
                ", paid=" + paid +
                ", date=" + date +
                ", stamp=" + stamp +
                ", user=" + user +
                ", program=" + program +
                '}';
    }

}

