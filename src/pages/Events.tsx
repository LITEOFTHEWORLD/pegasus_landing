import EmptyState from '../components/EventCard/EmptyState';
import EventCardNew from '../components/EventCard/EventCardNew';
import { EventProps } from '../utils/Types&Interfaces';

const Events = () => {
  // Dummy data - replace with API call
  const eventTwo: EventProps[] = [
    {
        id: 'PL-ARS-LIV',
        title: 'Arsenal vs Liverpool',
        date: '2024-02-03',
        startTime: '17:30',
        price: 75.00,
        image: '/imagesample.jpg',
        status: 'active'
      },
      {
        id: 'FAC-MUN-CHE',
        title: 'Manchester United vs Chelsea',
        date: '2024-02-14',
        startTime: '19:45',
        price: 65.00,
        image: '/imagesample.jpg',
        status: 'active'
      },
      {
        id: 'PL-TOT-MCI',
        title: 'Tottenham vs Manchester City',
        date: '2024-02-25',
        startTime: '16:30',
        price: 70.00,
        image: '/imagesample.jpg',
        status: 'active'
      },
      {
        id: 'PL-NEW-MUN',
        title: 'Newcastle vs Manchester United',
        date: '2024-03-02',
        startTime: '20:00',
        price: 68.00,
        image: '/imagesample.jpg',
        status: 'active'
      }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
        <div className="w-full flex justify-between items-center">
           <h1 className="text-3xl font-bold mb-8">Upcoming Events</h1>
            <div className="flex justify-end items-center gap-5 mb-6">
               <h4 className='text-black hover:text-[#ED2839] font-semibold text-md cursor-pointer'>My Tickets</h4>
               <h4 className='text-black hover:text-[#ED2839] font-semibold text-md cursor-pointer'>More Info</h4>   
            </div>
        </div>
      {
        eventTwo.length === 0 ?
        <EmptyState />
        :
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {eventTwo.map(event => (
          <EventCardNew key={event.id} {...event} />
        ))}
      </div>
      }

    </div>
  );
};

export default Events;