package com.example.TusRecetas.controller;

import com.example.TusRecetas.model.CCookingRecipe;
import com.example.TusRecetas.repositories.ICookingRecipe;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RestController
@RequestMapping("api/v1/cookingrecipe")
@CrossOrigin("*")
public class CCookingRecipeController {

        @Autowired

        private ICookingRecipe iCookingRecipe;

        @GetMapping
        public List<CCookingRecipe> getCookingRecipe (Model model){
            return iCookingRecipe.findAll();
        }
        @GetMapping("/{id}")
        public CCookingRecipe getCookingRecipeBy(@PathVariable int id) {
            return iCookingRecipe.findById(id).orElseThrow(RuntimeException::new);
        }

        @PostMapping("/save")
        public ResponseEntity<CCookingRecipe> save(@RequestBody CCookingRecipe cookingRecipe)throws URISyntaxException {
            CCookingRecipe savedCookingRecipe = iCookingRecipe.save(cookingRecipe);
            return ResponseEntity.created(new URI("/cookingrecipe/" + savedCookingRecipe.getId())).body(savedCookingRecipe);
        }
        @PutMapping("/update/{id}")
        public ResponseEntity<CCookingRecipe> update(@PathVariable int id, @RequestBody CCookingRecipe cookingRecipe){
            CCookingRecipe currentCookingRecipe = iCookingRecipe.findById(id).orElseThrow(RuntimeException::new);
            currentCookingRecipe.setTitle(cookingRecipe.getTitle());
            currentCookingRecipe.setDescription(cookingRecipe.getDescription());
            currentCookingRecipe.setIngredients(cookingRecipe.getIngredients());
            currentCookingRecipe.setUrl(cookingRecipe.getUrl());
            currentCookingRecipe = iCookingRecipe.save(currentCookingRecipe);
            return ResponseEntity.ok(currentCookingRecipe);
        }
        @DeleteMapping("/delete/{id}")
        public ResponseEntity delete(@PathVariable("id") int id){
            iCookingRecipe.deleteById(id);
            return ResponseEntity.ok().build();
        }
}
