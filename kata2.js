function friend(friends) {
  realFriends = []
  for (buddy of friends) {
    if (buddy.length === 4) {
      realFriends.push(buddy)
    }
  }
}

friend(["Ryan", "Kieran", "Mark"], ["Ryan", "Mark"])