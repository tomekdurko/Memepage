package com.project.memepage.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.Email;
import java.io.Serializable;

@Entity
public class User implements Serializable {
    @Id
    @GeneratedValue

    private long id;

    private String userName;

    private String password;

    @Email
    private String email;

    public long getId() {
        return id;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public String getUserName() {
        return userName;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }
    public User(User user)
    {
        id=user.id;
        userName=user.userName;
        email=user.email;
        password=user.password;
    }

}
