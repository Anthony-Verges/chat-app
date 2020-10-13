import React from 'react';
import QuoteCard from './QuoteCard';
import PropTypes from 'prop-types';

const Array = [
    {
        name: 'Robert Reyes',
        avatar: 'https://randomuser.me/api/portraits/men/28.jpg',
        online: false
      },
      {
        name: 'Nellie Caldwell',
        avatar: 'https://randomuser.me/api/portraits/women/17.jpg',
        online: true
      },
      {
        name: 'Vernon Mason',
        avatar: 'https://randomuser.me/api/portraits/men/84.jpg',
        online: true
      },
      {
        name: 'Erica Hunt',
        avatar: 'https://randomuser.me/api/portraits/women/87.jpg',
        online: false
      },
      {
        name: 'Juanita Phillips',
        avatar: 'https://randomuser.me/api/portraits/women/55.jpg',
        online: true
      }
]

const ContactList = () => (
    <div>
        {Array.map(list => (
            <QuoteCard key={list.name} name={list.name} image={list.avatar} isConnect={list.online} />
        ))}
    </div>
);
ContactList.propTypes = {
    name : PropTypes.string.isRequired,
    avatar : PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired,

  };
export default ContactList

