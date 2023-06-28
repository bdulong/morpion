<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class SimonController extends AbstractController
{
    #[Route('/simon', name: 'app_simon')]
    public function index(): Response
    {
        return $this->render('simon/index.html.twig', [
            'controller_name' => 'SimonController',
        ]);
    }
}