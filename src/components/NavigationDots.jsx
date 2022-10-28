const NavigationDots = ({ active }) => {
  return (
    <div className='app__navigation'>
      {['home', 'about', 'work', 'skills', 'testimonials', 'contact'].map((item) => (
        // eslint-disable-next-line jsx-a11y/anchor-has-content
        <a
          className='app__navigation-dot'
          href={`#${item}`}
          key={item}
          style={active === item ? { backgroundColor: '#313BAC' } : {}}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
