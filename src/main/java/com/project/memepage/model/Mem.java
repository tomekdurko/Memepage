package com.project.memepage.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.time.LocalDateTime;
import java.util.Date;

/**
 * Created by Tomek on 2018-06-28.
 */
@Entity
public class Mem {
    @Id
    @GeneratedValue
    private long id;

    private String name;

    private String autor;

    private String photoUrl;

    private LocalDateTime data;

    public LocalDateTime getData() {
        return data;
    }

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getAutor() {
        return autor;
    }

    public String getPhotoUrl() {
        return photoUrl;
    }

    public void setPhotoUrl(String photoUrl) {
        this.photoUrl = photoUrl;
    }

    public void setData(LocalDateTime data) {
        this.data = data;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setAutor(String autor) {
        this.autor = autor;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Mem()
    {

    }
}
