package jsbbank.jsbbankprod.entities.helpers;

public class RoleEasy {
    private Long id;
    private String role;
    private boolean have;

    public RoleEasy() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public boolean isHave() {
        return have;
    }

    public void setHave(boolean have) {
        this.have = have;
    }

    public RoleEasy(Long id, String role, boolean have) {
        this.id = id;
        this.role = role;
        this.have = have;
    }

    @Override
    public String toString() {
        return "RoleEasy{" +
                "id=" + id +
                ", role='" + role + '\'' +
                ", have=" + have +
                '}';
    }
}
