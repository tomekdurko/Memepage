package com.project.memepage.service;

import com.project.memepage.model.Mem;
import com.project.memepage.repository.MemepageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

/**
 * Created by Tomek on 2018-07-02.
 */
@Service
public class MemeService {
    @Autowired
    private MemepageRepository memepageRepository;

    public MemeService(MemepageRepository memepageRepository)
    {
        this.memepageRepository = memepageRepository;
    }
    public Mem addMeme(Mem input)
    {

        input.setData(LocalDateTime.now());
        String nowyUrl=input.getAutor() + input.getName();
        nowyUrl=nowyUrl.replaceAll(" ", "_").toLowerCase();
        input.setPhotoUrl(nowyUrl);
        return memepageRepository.save(input);
    }
    public Optional<Mem> getMeme(long id)
    {
        return memepageRepository.findById(id);
    }
    public List<Mem> getMemes()
    {
         return memepageRepository.findAll();
    }
}
