package com.example.TusRecetas.model;


import jakarta.persistence.*;

@Entity
@Table(name="cookingrecipes")
public class CCookingRecipe {



    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private int id;
    private String title;
    private String ingredients;

    @Column(length = 1000)
    private String description;
    private String url;

    private String categories;



    public CCookingRecipe(int id, String title, String description, String url, String ingredients, String categories){
        this.description = description;
        this.title = title;
        this.id = id;
        this.url = url;
        this.ingredients = ingredients;
        this.categories = categories;

    }
    public CCookingRecipe() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }
    public String getIngredients() {
        return ingredients;
    }

    public void setIngredients(String ingredients) {
        this.ingredients = ingredients;
    }
    public String getCategories() {
        return categories;
    }
    public void setCategories(String categories) {
        this.categories = categories;
    }

}
