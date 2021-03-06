export default function(){

  this.transition(
    this.fromRoute('users'),
    this.toRoute(['quotes','polls','courses','anecdotes','facts','mottos']),
    this.use('toLeft'),
    this.reverse('toRight')
  );
  this.transition(
    this.fromRoute('quotes'),
    this.toRoute(['polls','courses','anecdotes','facts','mottos']),
    this.use('toLeft'),
    this.reverse('toRight')
  );
  this.transition(
    this.fromRoute('polls'),
    this.toRoute(['courses','anecdotes','facts','mottos']),
    this.use('toLeft'),
    this.reverse('toRight')
  );
  this.transition(
    this.fromRoute('courses'),
    this.toRoute(['anecdotes','facts','mottos']),
    this.use('toLeft'),
    this.reverse('toRight')
  );
  this.transition(
    this.fromRoute('anecdotes'),
    this.toRoute(['facts','mottos']),
    this.use('toLeft'),
    this.reverse('toRight')
  );
  this.transition(
    this.fromRoute('facts'),
    this.toRoute(['mottos']),
    this.use('toLeft'),
    this.reverse('toRight')
  );



  this.transition(
    this.withinRoute('users.user'),

    this.use('toLeft'),
    this.reverse('toRight')
  );
};
