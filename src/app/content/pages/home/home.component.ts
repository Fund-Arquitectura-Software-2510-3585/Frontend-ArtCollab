import {Component, OnInit} from '@angular/core';
import {ProjectCardComponent} from './components/project-card/project-card.component';
import {NgForOf, NgIf} from '@angular/common';
import {Router} from '@angular/router';
import {PortfolioCardComponent} from './components/portfolio-card/portfolio-card.component';
import {WriterCardComponent} from './components/writer-card/writer-card.component';
import {BookCardComponent} from './components/book-card/book-card.component';
import {IllustrationProfileComponent} from '../profile/illustration-profile/illustration-profile.component';
import {IllustratorCardComponent} from './components/illustrator-card/illustrator-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ProjectCardComponent,
    NgForOf,
    WriterCardComponent,
    BookCardComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{

  user = {
    name: 'Andres Valle',
    role: ''
  };

  projects = [
    {
      id: 1,
      title: 'Proyecto de Animales Fantásticos',
      author: 'María López',
      date: '10/05/2025',
      applicationDate: '12/05/2025',
      imageSrc: 'https://s1.1zoom.me/b5050/281/Fantastic_world_Tigers_Magical_animals_518194_1920x1080.jpg',
      description: 'Este proyecto trata sobre crear cuentos ilustrados con animales fantásticos que enseñen valores a los niños. A través de personajes mágicos y situaciones sorprendentes, se busca estimular la creatividad y la imaginación infantil. Además, se abordarán temas como la empatía, el respeto por la diversidad y la importancia de la amistad en un formato lúdico y educativo que permitirá a los niños aprender mientras se divierten.'
    },
    {
      id: 2,
      title: 'Cuentos sobre la Amistad',
      author: 'Carlos Pérez',
      date: '11/05/2025',
      applicationDate: '12/05/2025',
      imageSrc: 'https://img.freepik.com/vector-gratis/fondo-degradado-celebracion-dia-internacional-amistad_23-2150515715.jpg',
      description: 'En este proyecto exploraremos historias sobre la amistad para fomentar la empatía y la solidaridad en la infancia. A través de narraciones emotivas y personajes entrañables, los niños descubrirán el valor del compañerismo, el trabajo en equipo y la importancia de apoyarse mutuamente. Cada cuento estará diseñado para provocar reflexión y diálogo tanto en casa como en el aula.'
    },
    {
      id: 3,
      title: 'Historias de Inclusión y Diversidad',
      author: 'Lucía Fernández',
      date: '12/05/2025',
      applicationDate: '12/05/2025',
      imageSrc: 'https://static.vecteezy.com/system/resources/previews/023/967/493/large_2x/world-day-for-cultural-diversity-for-dialogue-and-development-abstract-illustration-generative-ai-photo.jpg',
      description: 'Este proyecto tiene como objetivo desarrollar cuentos ilustrados que promuevan la inclusión y el respeto por las diferencias. A través de relatos protagonizados por niños y niñas de diferentes culturas, capacidades y contextos, se busca construir una visión más abierta y comprensiva del mundo. El enfoque será pedagógico y emocional, incorporando actividades complementarias para padres y educadores.'
    },
    {
      id: 4,
      title: 'Historias de Inclusión y Diversidad',
      author: 'Lucía Fernández',
      date: '12/05/2025',
      applicationDate: '12/05/2025',
      imageSrc: 'https://static.vecteezy.com/system/resources/previews/023/967/493/large_2x/world-day-for-cultural-diversity-for-dialogue-and-development-abstract-illustration-generative-ai-photo.jpg',
      description: 'Este proyecto tiene como objetivo desarrollar cuentos ilustrados que promuevan la inclusión y el respeto por las diferencias. A través de relatos protagonizados por niños y niñas de diferentes culturas, capacidades y contextos, se busca construir una visión más abierta y comprensiva del mundo. El enfoque será pedagógico y emocional, incorporando actividades complementarias para padres y educadores.'
    },
    {
      id: 5,
      title: 'Historias de Inclusión y Diversidad',
      author: 'Lucía Fernández',
      date: '12/05/2025',
      applicationDate: '12/05/2025',
      imageSrc: 'https://static.vecteezy.com/system/resources/previews/023/967/493/large_2x/world-day-for-cultural-diversity-for-dialogue-and-development-abstract-illustration-generative-ai-photo.jpg',
      description: 'Este proyecto tiene como objetivo desarrollar cuentos ilustrados que promuevan la inclusión y el respeto por las diferencias. A través de relatos protagonizados por niños y niñas de diferentes culturas, capacidades y contextos, se busca construir una visión más abierta y comprensiva del mundo. El enfoque será pedagógico y emocional, incorporando actividades complementarias para padres y educadores.'
    },
    {
      id: 6,
      title: 'Historias de Inclusión y Diversidad',
      author: 'Lucía Fernández',
      date: '12/05/2025',
      applicationDate: '12/05/2025',
      imageSrc: 'https://static.vecteezy.com/system/resources/previews/023/967/493/large_2x/world-day-for-cultural-diversity-for-dialogue-and-development-abstract-illustration-generative-ai-photo.jpg',
      description: 'Este proyecto tiene como objetivo desarrollar cuentos ilustrados que promuevan la inclusión y el respeto por las diferencias. A través de relatos protagonizados por niños y niñas de diferentes culturas, capacidades y contextos, se busca construir una visión más abierta y comprensiva del mundo. El enfoque será pedagógico y emocional, incorporando actividades complementarias para padres y educadores.'
    },
    {
      id: 7,
      title: 'Historias de Inclusión y Diversidad',
      author: 'Lucía Fernández',
      date: '12/05/2025',
      applicationDate: '12/05/2025',
      imageSrc: 'https://static.vecteezy.com/system/resources/previews/023/967/493/large_2x/world-day-for-cultural-diversity-for-dialogue-and-development-abstract-illustration-generative-ai-photo.jpg',
      description: 'Este proyecto tiene como objetivo desarrollar cuentos ilustrados que promuevan la inclusión y el respeto por las diferencias. A través de relatos protagonizados por niños y niñas de diferentes culturas, capacidades y contextos, se busca construir una visión más abierta y comprensiva del mundo. El enfoque será pedagógico y emocional, incorporando actividades complementarias para padres y educadores.'
    },
    {
      id: 8,
      title: 'Historias de Inclusión y Diversidad',
      author: 'Lucía Fernández',
      date: '12/05/2025',
      applicationDate: '12/05/2025',
      imageSrc: 'https://static.vecteezy.com/system/resources/previews/023/967/493/large_2x/world-day-for-cultural-diversity-for-dialogue-and-development-abstract-illustration-generative-ai-photo.jpg',
      description: 'Este proyecto tiene como objetivo desarrollar cuentos ilustrados que promuevan la inclusión y el respeto por las diferencias. A través de relatos protagonizados por niños y niñas de diferentes culturas, capacidades y contextos, se busca construir una visión más abierta y comprensiva del mundo. El enfoque será pedagógico y emocional, incorporando actividades complementarias para padres y educadores.'
    },
    {
      id: 9,
      title: 'Historias de Inclusión y Diversidad',
      author: 'Lucía Fernández',
      date: '12/05/2025',
      applicationDate: '12/05/2025',
      imageSrc: 'https://static.vecteezy.com/system/resources/previews/023/967/493/large_2x/world-day-for-cultural-diversity-for-dialogue-and-development-abstract-illustration-generative-ai-photo.jpg',
      description: 'Este proyecto tiene como objetivo desarrollar cuentos ilustrados que promuevan la inclusión y el respeto por las diferencias. A través de relatos protagonizados por niños y niñas de diferentes culturas, capacidades y contextos, se busca construir una visión más abierta y comprensiva del mundo. El enfoque será pedagógico y emocional, incorporando actividades complementarias para padres y educadores.'
    }
  ];

  portfolios = [
    {
      id: 1,
      title: 'Proyecto de Animales Fantásticos',
      author: 'María López',
      date: '10/05/2025',
      applicationDate: '12/05/2025',
      imageSrc: 'https://s1.1zoom.me/b5050/281/Fantastic_world_Tigers_Magical_animals_518194_1920x1080.jpg',
      description: 'Este proyecto trata sobre crear cuentos ilustrados con animales fantásticos que enseñen valores a los niños. A través de personajes mágicos y situaciones sorprendentes, se busca estimular la creatividad y la imaginación infantil. Además, se abordarán temas como la empatía, el respeto por la diversidad y la importancia de la amistad en un formato lúdico y educativo que permitirá a los niños aprender mientras se divierten.'
    },
    {
      id: 2,
      title: 'Cuentos sobre la Amistad',
      author: 'Carlos Pérez',
      date: '11/05/2025',
      applicationDate: '12/05/2025',
      imageSrc: 'https://img.freepik.com/vector-gratis/fondo-degradado-celebracion-dia-internacional-amistad_23-2150515715.jpg',
      description: 'En este proyecto exploraremos historias sobre la amistad para fomentar la empatía y la solidaridad en la infancia. A través de narraciones emotivas y personajes entrañables, los niños descubrirán el valor del compañerismo, el trabajo en equipo y la importancia de apoyarse mutuamente. Cada cuento estará diseñado para provocar reflexión y diálogo tanto en casa como en el aula.'
    },
    {
      id: 3,
      title: 'Historias de Inclusión y Diversidad',
      author: 'Lucía Fernández',
      date: '12/05/2025',
      applicationDate: '12/05/2025',
      imageSrc: 'https://static.vecteezy.com/system/resources/previews/023/967/493/large_2x/world-day-for-cultural-diversity-for-dialogue-and-development-abstract-illustration-generative-ai-photo.jpg',
      description: 'Este proyecto tiene como objetivo desarrollar cuentos ilustrados que promuevan la inclusión y el respeto por las diferencias. A través de relatos protagonizados por niños y niñas de diferentes culturas, capacidades y contextos, se busca construir una visión más abierta y comprensiva del mundo. El enfoque será pedagógico y emocional, incorporando actividades complementarias para padres y educadores.'
    }
  ];

  writers = [
    {
      id: 1,
      author: 'Diego Criollo',
      photo: 'https://media.licdn.com/dms/image/v2/D4D03AQEHAFaD7lk0_g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1722623220508?e=2147483647&v=beta&t=CNNYILifUGwe1U2GtBtJhFanyEiaeJoCYILAWfwmupo',
      suscription: 2
    },
    {
      id: 2,
      author: 'Blaba',
      photo: 'https://media.licdn.com/dms/image/v2/D4D03AQEHAFaD7lk0_g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1722623220508?e=2147483647&v=beta&t=CNNYILifUGwe1U2GtBtJhFanyEiaeJoCYILAWfwmupo',
      suscription: 0
    },
    {
      id: 3,
      author: 'Blaba',
      photo: 'https://media.licdn.com/dms/image/v2/D4D03AQEHAFaD7lk0_g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1722623220508?e=2147483647&v=beta&t=CNNYILifUGwe1U2GtBtJhFanyEiaeJoCYILAWfwmupo',
      suscription: 0
    },
    {
      id: 4,
      author: 'Diego Criollo',
      photo: 'https://media.licdn.com/dms/image/v2/D4D03AQEHAFaD7lk0_g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1722623220508?e=2147483647&v=beta&t=CNNYILifUGwe1U2GtBtJhFanyEiaeJoCYILAWfwmupo',
      suscription: 2
    },
    {
      id: 5,
      author: 'Blaba',
      photo: 'https://media.licdn.com/dms/image/v2/D4D03AQEHAFaD7lk0_g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1722623220508?e=2147483647&v=beta&t=CNNYILifUGwe1U2GtBtJhFanyEiaeJoCYILAWfwmupo',
      suscription: 0
    },
    {
      id: 6,
      author: 'Blaba',
      photo: 'https://media.licdn.com/dms/image/v2/D4D03AQEHAFaD7lk0_g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1722623220508?e=2147483647&v=beta&t=CNNYILifUGwe1U2GtBtJhFanyEiaeJoCYILAWfwmupo',
      suscription: 0
    },
    {
      id: 7,
      author: 'Diego Criollo',
      photo: 'https://media.licdn.com/dms/image/v2/D4D03AQEHAFaD7lk0_g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1722623220508?e=2147483647&v=beta&t=CNNYILifUGwe1U2GtBtJhFanyEiaeJoCYILAWfwmupo',
      suscription: 2
    },
    {
      id: 8,
      author: 'Blaba',
      photo: 'https://media.licdn.com/dms/image/v2/D4D03AQEHAFaD7lk0_g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1722623220508?e=2147483647&v=beta&t=CNNYILifUGwe1U2GtBtJhFanyEiaeJoCYILAWfwmupo',
      suscription: 0
    },
    {
      id: 9,
      author: 'Blaba',
      photo: 'https://media.licdn.com/dms/image/v2/D4D03AQEHAFaD7lk0_g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1722623220508?e=2147483647&v=beta&t=CNNYILifUGwe1U2GtBtJhFanyEiaeJoCYILAWfwmupo',
      suscription: 0
    },
  ];
  books = [
    {
      id: 1,
      title: 'El Señor de Los Anillos',
      author: 'Diego Criollo',
      image: 'https://es.web.img2.acsta.net/c_310_420/medias/nmedia/18/89/67/45/20061512.jpg'
    },
    {
      id: 2,
      title: 'El Señor de Los Anillos',
      author: 'Diego Criollo',
      image: 'https://es.web.img2.acsta.net/c_310_420/medias/nmedia/18/89/67/45/20061512.jpg'
    },
    {
      id: 3,
      title: 'El Señor de Los Anillos',
      author: 'Diego Criollo',
      image: 'https://es.web.img2.acsta.net/c_310_420/medias/nmedia/18/89/67/45/20061512.jpg'
    },
    {
      id: 4,
      title: 'El Señor de Los Anillos',
      author: 'Diego Criollo',
      image: 'https://es.web.img2.acsta.net/c_310_420/medias/nmedia/18/89/67/45/20061512.jpg'
    },
    {
      id: 5,
      title: 'El Señor de Los Anillos',
      author: 'Diego Criollo',
      image: 'https://es.web.img2.acsta.net/c_310_420/medias/nmedia/18/89/67/45/20061512.jpg'
    },
    {
      id: 6,
      title: 'El Señor de Los Anillos',
      author: 'Diego Criollo',
      image: 'https://es.web.img2.acsta.net/c_310_420/medias/nmedia/18/89/67/45/20061512.jpg'
    },
    {
      id: 7,
      title: 'El Señor de Los Anillos',
      author: 'Diego Criollo',
      image: 'https://es.web.img2.acsta.net/c_310_420/medias/nmedia/18/89/67/45/20061512.jpg'
    },
    {
      id: 8,
      title: 'El Señor de Los Anillos',
      author: 'Diego Criollo',
      image: 'https://es.web.img2.acsta.net/c_310_420/medias/nmedia/18/89/67/45/20061512.jpg'
    },
  ];

  constructor(private router: Router) {}

  goToAllProjects() {
    this.router.navigate(['/all-projects']);
  }

  goToAllWriters() {
    this.router.navigate(['/all-writers']);
  }

  goToAllBooks() {
    this.router.navigate(['/all-books']);
  }

  goToAllPortfolios(){
    this.router.navigate(['/all-portfolios']);
  }

  goToAllIllustrators() {
    this.router.navigate(['/all-illustrators']);
  }

  goToAllIllustrations() {
    this.router.navigate(['/all-illustrations']);
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
