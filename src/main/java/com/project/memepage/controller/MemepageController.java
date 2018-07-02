package com.project.memepage.controller;

import com.project.memepage.model.Mem;
import com.project.memepage.service.MemeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

/**
 * Created by Tomek on 2018-06-28.
 */
@RestController
public class MemepageController {

    @Autowired
    private MemeService memeService;

    public MemepageController(MemeService memeService)
    {
        this.memeService= memeService;

    }
    @GetMapping(value = "/")
     public String index()
    {
    return "index";
    }
    @GetMapping(value = "/meme")
    public List<Mem> getMem()
    {
        return memeService.getMemes();
    }
    @GetMapping(value = "/meme/{memeId}")
    public ResponseEntity getOneMem(@PathVariable Long memeId)
    {
        ResponseEntity responseEntity;
        Optional<Mem> output = memeService.getMeme(memeId);
        if(!output.isPresent())
        {
            responseEntity = new ResponseEntity("Nie znaleziono zadnego Meme z podanym ID " + memeId,HttpStatus.NOT_FOUND);
        }
        else
        {
            responseEntity = new ResponseEntity(output,HttpStatus.OK);
        }
        return responseEntity;
    }
    @PostMapping(value = "/add")
    ResponseEntity addMem(@RequestBody Mem input, BindingResult result)
    {
        ResponseEntity responseEntity;

        if(result.hasErrors())
        {
            responseEntity= new ResponseEntity("Zly request", HttpStatus.BAD_REQUEST);
        }
        else
        {
            responseEntity= new ResponseEntity(input,HttpStatus.OK);
            memeService.addMeme(input);
        }
        return responseEntity;
    }
}
