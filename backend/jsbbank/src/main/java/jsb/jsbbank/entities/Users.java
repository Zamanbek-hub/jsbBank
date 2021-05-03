package jsb.jsbbank.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Collection;
import java.util.List;

@Entity
@Table(name = "users")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Users {
    public Users(String email, String password, String first_name, String last_name, String iin, float wallet, List<Roles> roles) {
        this.email = email;
        this.password = password;
        this.first_name = first_name;
        this.last_name = last_name;
        this.iin = iin;
        this.wallet = wallet;
        this.roles = roles;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String password;

    @Column(name = "first_name")
    private String first_name;

    @Column(name = "last_name")
    private String last_name;

    @Column(name = "iin", length = 12)
    private String iin;

    @Column(name = "wallet", length = 12)
    private float wallet;

    @ManyToMany(fetch = FetchType.EAGER)
    private List<Roles> roles;
}
