package jsbbank.jsbbankprod.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class JwtRequest {
    private static final long serialVersionUID = 123456789L;

    private String email;
    private String password;
}
