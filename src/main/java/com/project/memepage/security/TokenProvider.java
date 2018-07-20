package com.project.memepage.security;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;

import java.util.Date;
import java.util.stream.Collectors;

public class TokenProvider {

    private String secretKey;

    public String createToken(Authentication authentication, boolean logIn) {
        return Jwts.builder()
                .setSubject("users/TzMUocMF4p")
                .setExpiration(new Date(1300819380))
                .claim("name", "Meme Token")
                .claim("scope", "self groups/admins")
                .signWith(
                        SignatureAlgorithm.HS256, secretKey)
                .setExpiration(validity)
                .compact();
    }
    public String createToken(Authentication authentication, boolean rememberMe) {
        String authorities = authentication.getAuthorities().stream()
                .map(GrantedAuthority::getAuthority)
                .collect(Collectors.joining(","));

        long now = (new Date()).getTime();
        Date validity;
        if (rememberMe) {
            validity = new Date(now + this.tokenValidityInMillisecondsForRememberMe);
        } else {
            validity = new Date(now + this.tokenValidityInMilliseconds);
        }

        return Jwts.builder()
                .setSubject(authentication.getName())
                .claim(AUTHORITIES_KEY, authorities)
                .signWith(SignatureAlgorithm.HS512, secretKey)
                .setExpiration(validity)
                .compact();
    }
    // Validating a JWT
    String jwt = //get JWT form header
            Jws<Claims> claims = Jwts.parser()
                    .setSigningKey("secret".getBytes("UTF-8"))
                    .parseClaimsJws(jwt);
    String scope = claims.getBody().get("scope").
            assertEquals(scope,"self groups/admin");

}
