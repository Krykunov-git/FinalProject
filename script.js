 const eventsStore = [
      {
        date: new Date(2024, 2, 23, 15),
        title: "INFJ Personality Type - Coffee Shop Meet & Greet",
        description: "Being an INFJ",
        
        image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1037&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "offline",
        attendees: 99,
        category: "Hobbies and Passions",
        distance: 50,
      },
      {
        title: "NYC AI Users - AI Tech Talks, Demo & Social: RAG Search and Customer Experience",
        description: "New York AI Users",
        date: new Date(2024, 2, 23, 11, 30),
        image: "https://images.unsplash.com/photo-1696258686454-60082b2c33e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "offline",
        attendees: 43,
        category: "Technology",
        distance: 25,
      },
      {
        title: "Book 40+ Appointments Per Month Using AI and Automation",
        description: "New Jersey Business Network",
        date: new Date(2024, 2, 16, 14),
        image: "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "online",
        category: "Technology",
        distance: 10,
      },
      {
        title: "Dump writing group weekly meetup",
        description: "Dump writing group",
        date: new Date(2024, 2, 13, 11),
        image: "https://plus.unsplash.com/premium_photo-1678453146992-b80d66df9152?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "online",
        attendees: 77,
        category: "Business",
        distance: 100,
      },
      {
        title: "Over 40s, 50s, & 60s Senior Singles Chat, Meet & Dating Community",
        description: "Over 40s, 50s, 60s Singles Chat, Meet & Dating Community",
        date: new Date(2024, 2, 14, 11),
        image: "https://plus.unsplash.com/premium_photo-1706005542509-a460d6efecb0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "online",
        attendees: 140,
        category: "Social Activities",
        distance: 75,
      },
      {
         date: new Date(2024, 2, 14, 11),
        title: "All Nations - Manhattan Missions Church Bible Study",
        description: "Manhattan Bible Study Meetup Group",
       
        image: "https://plus.unsplash.com/premium_photo-1679488248784-65a638a3d3fc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "offline",
        category: "Health and Wellbeing",
        distance: 15,
      },
    ];



    const container = document.querySelector('.events-section');


          // Скидаю фильтр  // 

document.getElementById('reset-filters').addEventListener('click', () => {
  filters = {
    date: null,
    type: null,
    category: null,
    distance: null,
  };
  document.querySelectorAll('.filter-options input').forEach(input => input.checked = false);
  renderFilteredEvents();
});
    let filters = {
  date: null,
  type: null,
  category: null,
  distance: null,
};



document.querySelectorAll('.filter-btn').forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
   const options = document.getElementById(`${filter}-options`);
    const isActive = options.classList.contains('active');
     document.querySelectorAll('.filter-options').forEach(opt => opt.classList.remove('active'));
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    if (!isActive) {
      options.classList.add('active');
      button.classList.add('active');
    }
     filters = {
      date: null,
      type: null,
      category: null,
      distance: null,
    };
    document.querySelectorAll('.filter-options input').forEach(input => input.checked = false);
  });
});

document.querySelectorAll('.filter-options input').forEach(input => {
  input.addEventListener('change', () => {
    const [_, key] = input.name.split('filter-');
    filters[key] = key === 'date' ? Number(input.value) : input.value;
    renderFilteredEvents();
  });
});



function renderFilteredEvents() {
  container.innerHTML = '';
  eventsStore
    .filter(event => {
     const matchDate =
  !filters.date ||
  (event.date.toDateString() === new Date(filters.date).toDateString());
      const matchType = !filters.type || event.type === filters.type;
      const matchCategory = !filters.category || event.category === filters.category;
      const matchDistance = !filters.distance || (event.distance == filters.distance);
      return matchDate && matchType && matchCategory && matchDistance;
    })
    .forEach(event => {
      const card = document.createElement('div');
      card.className = 'event-card';
      card.innerHTML = `
        <img src="${event.image}" alt="${event.title}" class="event-image" />
        <div class="event-content">
         <p class="event-data" ><strong>Date:</strong > ${event.date.toLocaleString()}</p>
          <h3 class="event-title" >${event.title}</h3>
           <p class="event-distance" ><strong>Distance:</strong> ${event.distance} km</p>
           
          ${event.attendees ? `<p class="event-going" ><strong>Going:</strong> ${event.attendees}</p>` : ""}
          
         
        </div>
      `;
      container.appendChild(card);
    });
}

renderFilteredEvents();

            // Оборот свг на кнопке// 

document.querySelectorAll('.filter-btn').forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    button.classList.toggle('active');
  });
});
renderFilteredEvents();