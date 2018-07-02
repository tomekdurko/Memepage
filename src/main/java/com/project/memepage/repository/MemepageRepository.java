package com.project.memepage.repository;

import com.project.memepage.model.Mem;
import org.springframework.data.jpa.repository.JpaRepository;


/**
 * Created by Tomek on 2018-07-02.
 */
public interface MemepageRepository extends JpaRepository<Mem, Long> {

}
