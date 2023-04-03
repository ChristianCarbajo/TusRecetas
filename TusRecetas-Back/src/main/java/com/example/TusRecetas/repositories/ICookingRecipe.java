package com.example.TusRecetas.repositories;

import com.example.TusRecetas.model.CCookingRecipe;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ICookingRecipe extends JpaRepository <CCookingRecipe, Integer> {
}
