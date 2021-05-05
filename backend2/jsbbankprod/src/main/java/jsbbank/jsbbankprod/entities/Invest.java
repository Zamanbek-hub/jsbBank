package jsbbank.jsbbankprod.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "invests")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Invest {
    public Invest(double amount, boolean paid, Date date, Date stamp, Users user) {
        this.amount = amount;
        this.paid = paid;
        this.date = date;
        this.stamp = stamp;
        this.user = user;
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

    @ManyToOne(fetch = FetchType.EAGER, optional=true)
    private Users user;

    @Override
    public String toString() {
        return "Invest{" +
                "id=" + id +
                ", amount=" + amount +
                ", paid=" + paid +
                ", date=" + date +
                ", stamp=" + stamp +
                ", user=" + user +
                '}';
    }
}
