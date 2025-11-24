---
title: "TramPlanner — Outil interne pour les agents du tramway T8"
description: "Application interne moderne permettant la consultation du planning, les échanges entre agents et la gestion dédiée superviseur."
date: "2025-03-15"
client: "RATP T8 — Projet réel"
context: "Soutenance TP Concepteur Développeur d’Applications"
tech:
  - React
  - Django REST
  - Tailwind
  - SQLite
  - Docker
---

TramPlanner est une application interne destinée aux agents du tramway T8 de la RATP.  
Son objectif : **moderniser un outil vieillissant** tout en facilitant le quotidien des équipes terrain.

## 🎯 Objectifs du projet

- Offrir une interface claire, simple et moderne aux agents.  
- Permettre les **échanges de créneaux** entre agents avec validation superviseur.  
- Donner aux superviseurs une vision globale du planning collectif.  
- Intégrer une **messagerie interne**, un forum et un espace de communication.  
- Préparer une architecture permettant une évolution future vers mobile.

---

## 🛠️ Fonctionnalités principales

### 👥 Côté agents
- Consultation du planning collectif.
- Demande d’échange d’un créneau vers un autre agent.
- Notification lorsque la demande est acceptée ou refusée.
- Profil agent : avatar, informations internes, historique.

### 🧩 Côté superviseur
- Vue globale sur l’équipe complète.
- Gestion des demandes d’échange en attente.
- Interface dédiée pour validation / refus.
- Gestion simplifiée par journée, agent ou créneau.

---

## 🎨 UX & UI

L’interface suit les principes :
- minimaliste,
- lisible,
- pensée pour être utilisée rapidement sur le terrain,
- inspirée des couleurs RATP (vert + gris).

---

## ⚙️ Architecture technique

- **Frontend** : React.js + Tailwind CSS  
- **Backend** : Django REST Framework  
- **Base de données** : SQLite  
- **Déploiement prévu** : Docker + VPS  
- **Routing** : REST complet avec endpoints sécurisés  
- **Stockage utilisateurs** : comptes réels créés dans Django Admin

---

## 🚀 Résultat

TramPlanner modernise un outil essentiel à la coordination des équipes du T8.  
Le projet met en avant mes compétences en **conception multicouche, modélisation, UX/UI, et communication entre frontend et backend**.

