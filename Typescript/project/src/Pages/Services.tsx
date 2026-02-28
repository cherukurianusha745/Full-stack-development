interface Service {
  id: number;
  name: string;
}

function Services() {
  const services: Service[] = [
    { id: 1, name: "Web Development" },
    { id: 2, name: "App Development" },
    { id: 3, name: "UI/UX Design" }
  ];

  return (
    <div className="page">
      <h1>Our Services</h1>

      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGy0DEtrONfsqcRwcbagnj6k9vK6zoQIxQQQ&s" alt="Services" />

      <ul>
        {services.map((service) => (
          <li key={service.id}>{service.name}</li>
        ))}
      </ul>

      <h3>App Development</h3>
      <p>
        App development is the process of creating mobile or desktop applications. 
        It includes designing, coding, testing, and maintaining apps that are user-friendly, efficient, and compatible with different platforms such as Android and iOS.
      </p>

      <h3>UI Design</h3>
      <p>
       UI development focuses on the visual design of an application.
        It includes designing layouts, buttons, colors, icons, and overall appearance to make the application attractive and easy to interact with.
      </p>

      <h3>UX Design</h3>
      <p>
        UX development focuses on improving the overall experience of the user. 
        It ensures that the application is easy to use, intuitive, and provides a smooth interaction by understanding user behavior and needs.
      </p>
    </div>
  );
}

export default Services;
