# ===============================================
# ALGORITHME DE CALCUL DE TARIF D'ASSURANCE EN PYTHON
# Conversion : Pseudo-code → Python
# ===============================================

"""
PSEUDO-CODE ORIGINAL:
ALGORITHME CalculerTarifAssurance
ENTRÉES: age, anciennete_permis, nb_accidents, assure_depuis
VARIABLES: tarif_base, tarif_final, est_fidele
CONSTANTES: TARIFS, REFUS
"""

def calculer_tarif_assurance(age, anciennete_permis, nb_accidents, assure_depuis):
    """
    Calcule le tarif d'assurance selon les règles de la compagnie.
    
    Args:
        age (int): Âge du conducteur
        anciennete_permis (int): Années depuis l'obtention du permis
        nb_accidents (int): Nombre d'accidents responsables
        assure_depuis (int): Années d'assurance dans la compagnie (0 si nouveau)
    
    Returns:
        str: Tarif proposé ("A", "B", "C", "D") ou "REFUSÉ" ou code d'erreur
    """
    
    # PSEUDO-CODE: CONSTANTES: TARIFS ← ["A", "B", "C", "D"], REFUS ← "REFUSÉ"
    # CONVERSION PYTHON: On définit les constantes comme variables locales
    TARIFS = ["A", "B", "C", "D"]
    REFUS = "REFUSÉ"
    
    # PSEUDO-CODE: VARIABLES: tarif_base, tarif_final, est_fidele
    # CONVERSION PYTHON: On déclare les variables (Python les crée à l'affectation)
    tarif_base = None
    tarif_final = None
    est_fidele = False
    
    # PSEUDO-CODE: AFFICHER "=== CALCUL DU TARIF D'ASSURANCE ==="
    # CONVERSION PYTHON: print() au lieu d'AFFICHER
    print("=== CALCUL DU TARIF D'ASSURANCE ===")
    print(f"Âge : {age} ans")
    print(f"Ancienneté permis : {anciennete_permis} ans")
    print(f"Nombre d'accidents : {nb_accidents}")
    print(f"Assuré depuis : {assure_depuis} ans")
    
    # PSEUDO-CODE: // Étape 1: Validation des données d'entrée
    # CONVERSION PYTHON: Commentaires avec # au lieu de //
    print("--- Validation des données ---")
    
    # PSEUDO-CODE: SI (age < 16) OU (age > 120) ALORS
    # CONVERSION PYTHON: if et or au lieu de SI et OU
    if age < 16 or age > 120:
        print("Erreur : Âge invalide")
        return "ERREUR_AGE"
    
    # PSEUDO-CODE: SI (anciennete_permis < 0) OU (anciennete_permis > age - 16) ALORS
    # CONVERSION PYTHON: Même structure avec if/or
    if anciennete_permis < 0 or anciennete_permis > age - 16:
        print("Erreur : Ancienneté permis invalide")
        return "ERREUR_PERMIS"
    
    # PSEUDO-CODE: SI (nb_accidents < 0) ALORS
    # CONVERSION PYTHON: if simple
    if nb_accidents < 0:
        print("Erreur : Nombre d'accidents invalide")
        return "ERREUR_ACCIDENTS"
    
    # PSEUDO-CODE: SI (assure_depuis < 0) ALORS
    # CONVERSION PYTHON: if simple
    if assure_depuis < 0:
        print("Erreur : Ancienneté assurance invalide")
        return "ERREUR_ASSURANCE"
    
    print("Données validées avec succès")
    
    # PSEUDO-CODE: // Étape 2: Calcul direct du tarif selon le profil
    # CONVERSION PYTHON: Commentaire Python
    print("--- Calcul du tarif de base ---")
    
    # PSEUDO-CODE: // CAS 1: Jeune conducteur inexpérimenté (< 25 ans ET permis < 2 ans)
    # PSEUDO-CODE: SI (age < 25) ET (anciennete_permis < 2) ALORS
    # CONVERSION PYTHON: if avec and au lieu de ET
    if age < 25 and anciennete_permis < 2:
        print("Profil : Jeune conducteur inexpérimenté")
        
        # PSEUDO-CODE: SI nb_accidents = 0 ALORS
        # CONVERSION PYTHON: == au lieu de =
        if nb_accidents == 0:
            print("Aucun accident : tarif D autorisé")
            tarif_base = "D"
        else:
            print("Au moins un accident : refus obligatoire")
            tarif_base = "REFUSÉ"
    
    # PSEUDO-CODE: SINON SI ((age < 25) ET (anciennete_permis >= 2)) OU ((age >= 25) ET (anciennete_permis < 2)) ALORS
    # CONVERSION PYTHON: elif avec and/or
    elif (age < 25 and anciennete_permis >= 2) or (age >= 25 and anciennete_permis < 2):
        print("Profil : Conducteur avec un facteur de risque")
        
        if nb_accidents == 0:
            print("Aucun accident : tarif C autorisé")
            tarif_base = "C"
        elif nb_accidents == 1:
            print("Un accident : tarif D autorisé")
            tarif_base = "D"
        else:
            print(f"Trop d'accidents ({nb_accidents}) : refus")
            tarif_base = "REFUSÉ"
    
    # PSEUDO-CODE: SINON (conducteur expérimenté)
    # CONVERSION PYTHON: else
    else:
        print("Profil : Conducteur expérimenté")
        
        if nb_accidents == 0:
            print("Aucun accident : tarif B autorisé")
            tarif_base = "B"
        elif nb_accidents == 1:
            print("Un accident : tarif C autorisé")
            tarif_base = "C"
        elif nb_accidents == 2:
            print("Deux accidents : tarif D autorisé")
            tarif_base = "D"
        else:
            print(f"Trop d'accidents ({nb_accidents}) : refus")
            tarif_base = "REFUSÉ"
    
    print(f"Tarif de base calculé : {tarif_base}")
    
    # PSEUDO-CODE: // Étape 3: Application directe du bonus fidélité
    # PSEUDO-CODE: est_fidele ← (assure_depuis > 1)
    # CONVERSION PYTHON: = au lieu de ←
    print("--- Application bonus fidélité ---")
    est_fidele = (assure_depuis > 1)
    
    # PSEUDO-CODE: SI est_fidele ET (tarif_base ≠ "REFUSÉ") ALORS
    # CONVERSION PYTHON: and et != au lieu de ET et ≠
    if est_fidele and tarif_base != "REFUSÉ":
        print(f"Client fidèle détecté (assuré depuis {assure_depuis} ans)")
        print(f"Application du bonus fidélité sur tarif : {tarif_base}")
        
        # PSEUDO-CODE: SI tarif_base = "D" ALORS tarif_final ← "C"
        # CONVERSION PYTHON: if/elif avec ==
        if tarif_base == "D":
            print("Amélioration D → C")
            tarif_final = "C"
        elif tarif_base == "C":
            print("Amélioration C → B")
            tarif_final = "B"
        elif tarif_base == "B":
            print("Amélioration B → A")
            tarif_final = "A"
        elif tarif_base == "A":
            print("Déjà au meilleur tarif")
            tarif_final = "A"
        else:
            print("Tarif non reconnu, pas de bonus")
            tarif_final = tarif_base
    else:
        if tarif_base == "REFUSÉ":
            print("Pas de bonus sur un refus")
        else:
            print(f"Pas de bonus fidélité (assuré depuis {assure_depuis} ans)")
        tarif_final = tarif_base
    
    # PSEUDO-CODE: // Étape 4: Résultat final
    # PSEUDO-CODE: RETOURNER tarif_final
    # CONVERSION PYTHON: return
    print("--- Résultat final ---")
    print(f"Tarif proposé : {tarif_final}")
    
    return tarif_final


# ===============================================
# PROGRAMME PRINCIPAL DE TEST EN PYTHON
# ===============================================

def tester_calcul_tarif():
    """
    PSEUDO-CODE: PROGRAMME PRINCIPAL DE TEST
    CONVERSION PYTHON: Fonction de test avec liste de dictionnaires
    """
    print("=== TESTS DE LA FONCTION CALCUL TARIF ===\n")
    
    # PSEUDO-CODE: cas_tests ← tableau de structures
    # CONVERSION PYTHON: Liste de dictionnaires
    cas_tests = [
        # Jeunes inexpérimentés
        {"age": 20, "permis": 1, "accidents": 0, "assure": 0, "attendu": "D", "description": "Jeune inexpérimenté, 0 accident"},
        {"age": 22, "permis": 1, "accidents": 1, "assure": 0, "attendu": "REFUSÉ", "description": "Jeune inexpérimenté, 1 accident"},
        {"age": 24, "permis": 0, "accidents": 0, "assure": 2, "attendu": "C", "description": "Jeune inexpérimenté + bonus fidélité"},
        
        # Risque modéré
        {"age": 23, "permis": 3, "accidents": 0, "assure": 0, "attendu": "C", "description": "Jeune expérimenté, 0 accident"},
        {"age": 30, "permis": 1, "accidents": 1, "assure": 0, "attendu": "D", "description": "Adulte inexpérimenté, 1 accident"},
        {"age": 24, "permis": 5, "accidents": 2, "assure": 0, "attendu": "REFUSÉ", "description": "Trop d'accidents"},
        
        # Expérimentés
        {"age": 35, "permis": 10, "accidents": 0, "assure": 0, "attendu": "B", "description": "Expérimenté, 0 accident"},
        {"age": 40, "permis": 15, "accidents": 1, "assure": 0, "attendu": "C", "description": "Expérimenté, 1 accident"},
        {"age": 50, "permis": 20, "accidents": 2, "assure": 0, "attendu": "D", "description": "Expérimenté, 2 accidents"},
        {"age": 30, "permis": 8, "accidents": 3, "assure": 0, "attendu": "REFUSÉ", "description": "Trop d'accidents"},
        
        # Avec bonus fidélité
        {"age": 35, "permis": 10, "accidents": 0, "assure": 3, "attendu": "A", "description": "Expérimenté + bonus fidélité"},
        {"age": 40, "permis": 15, "accidents": 1, "assure": 2, "attendu": "B", "description": "Expérimenté, 1 accident + bonus"},
        {"age": 50, "permis": 20, "accidents": 2, "assure": 5, "attendu": "C", "description": "Expérimenté, 2 accidents + bonus"}
    ]
    
    # PSEUDO-CODE: POUR i DE 0 À taille(cas_tests) - 1 FAIRE
    # CONVERSION PYTHON: for avec enumerate()
    for i, test in enumerate(cas_tests):
        print(f"--- Test {i + 1}: {test['description']} ---")
        
        # PSEUDO-CODE: resultat ← CalculerTarifAssurance(...)
        # CONVERSION PYTHON: Appel de fonction Python
        resultat = calculer_tarif_assurance(
            test["age"], 
            test["permis"], 
            test["accidents"], 
            test["assure"]
        )
        
        print(f"Résultat obtenu : {resultat}")
        print(f"Résultat attendu : {test['attendu']}")
        
        # PSEUDO-CODE: SI resultat = cas_tests[i].attendu ALORS
        # CONVERSION PYTHON: if avec ==
        if resultat == test["attendu"]:
            print("✅ TEST RÉUSSI\n")
        else:
            print("❌ TEST ÉCHOUÉ\n")
    
    print("Tous les tests terminés !")


