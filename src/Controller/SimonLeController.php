<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class SimonLeController extends AbstractController
{
    #[Route('/simon/le', name: 'app_simon_le')]
    public function index(): Response
    {
        return $this->render('simon_le/index.html.twig', [
            'controller_name' => 'SimonLeController',
        ]);
    }

    #[Route('/article_page', name: 'article_page')]
    public function article_page(): Response
    {
        return $this->render('pages/landing_page/index.html.twig', [
            'controller_name' => 'article_page',
        ]);
    }

    #[Route('/landing_page', name: 'landing_page')]
    public function landing_page(): Response
    {
        return $this->render('pages/landing_page/index.html.twig', [
            'controller_name' => 'landing_page',
        ]);
    }

    #[Route('/model_article_overview_page', name: 'model_article_overview_page', methods: ['GET'])]
    public function model_article_overview_page(): Response
    {
        return $this->render('pages/model_article_overview_page/index.html.twig', [
            'controller_name' => 'model_article_overview_page',
        ]);
    }

    #[Route('/contact_page', name: 'contact_page')]
    public function contact_page(): Response
    {
        return $this->render('pages/contact_page/index.html.twig', [
            'controller_name' => 'contact_page',
        ]);
    }

    #[Route('/model_recent_content_page', name: 'model_recent_content_page')]
    public function model_recent_content_page(): Response
    {
        return $this->render('pages/model_recent_content_page/index.html.twig', [
            'controller_name' => 'model_recent_content_page',
        ]);
    }

    #[Route('/profil_page', name: 'profil_page')]
    public function profil_page(): Response
    {
        return $this->render('pages/profil_page/index.html.twig', [
            'controller_name' => 'profil_page',
        ]);
    }
}