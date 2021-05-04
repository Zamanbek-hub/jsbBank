package jsbbank.jsbbankprod.entities.helpers;

public class UserRequest {
    private Long id;
    private String full_name;
    private String email;
    private String password;
    private String re_password;

    @Override
    public String toString() {
        return "UserRequest{" +
                "id=" + id +
                ", full_name='" + full_name + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", re_password='" + re_password + '\'' +
                '}';
    }

    public UserRequest() {
    }

    public UserRequest(String full_name, String email, String password, String re_password) {
        this.full_name = full_name;
        this.email = email;
        this.password = password;
        this.re_password = re_password;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFull_name() {
        return full_name;
    }

    public void setFull_name(String full_name) {
        this.full_name = full_name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRe_password() {
        return re_password;
    }

    public void setRe_password(String re_password) {
        this.re_password = re_password;
    }
}
