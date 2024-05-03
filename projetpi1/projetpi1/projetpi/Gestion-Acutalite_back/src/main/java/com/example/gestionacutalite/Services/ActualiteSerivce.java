package com.example.gestionacutalite.Services;
import com.example.gestionacutalite.Entites.Actualites;
import com.example.gestionacutalite.Entites.User;
import org.hibernate.query.Page;

import java.awt.print.Pageable;
import java.util.List;


public interface ActualiteSerivce {

    Actualites create(Actualites actualites );
    Actualites update(Long id, Actualites actualites);
    void delete(Long id);
    Actualites getById(Long id);

     List<Actualites> getAllActualites() ;



    }
