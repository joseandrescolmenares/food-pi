


const isValidName = (name) => {
    if(!name) {
      return false
    }
    return true
  }
  
  const isValidNameAgainstRegexp = (name) => {
    if(name && /^[0-9]+$/.test(name)) {
      return false
    }
    return true
  }
  
  const isValidScore = (score) => {
    if(!score || score <0) {
      return false
    }

    return true
  }
  
  const isValidLevel = (level) => {
    if(!level || level < 0) {
      return false
    }
    return true
  }
  
  const isValidSteps = (steps) => {
    if(!steps) {
      return false
    }
    return true
  }
  
  
  const isValidSummary = (summary) => {
    if(!summary) {
      return false
    }
    return true
  }
  
  const isValidDietName = (dietName) => {
    if(!dietName) {
        return false
      } else if(dietName && !dietName.length) {
        return false
      }
      return true
  }

  export const validateFormAndReturnErrorObject = (form) => {
    const {
      name,
      score,
      level,
      steps,
      summary,
      namedi,
    } = form
    const error = {}
    if(!isValidName(name)) {
      error.name = 'error'
    }
    if(!isValidNameAgainstRegexp(name)) {
      error.name = 'error'
    }
    if(!isValidScore(score)) {
      error.score = 'error'
    }
    if(!isValidLevel(level)) {
      error.level = 'error'
    }
    if(!isValidSteps(steps)) {
      error.steps = 'error'
    }
    if(!isValidSummary(summary)) {
      error.summary = 'error'
    }
    if(!isValidDietName(namedi)) {
      error.namedi = 'error'
    }
  
    return error
  }
  
  export const isFullFormValid = (form) => {
    const {
      name,
      score,
      level,
      steps,
      summary,
      namedi,
    } = form
    return !(isValidName(name)
    && isValidNameAgainstRegexp(name)
    && isValidScore(score)
    && isValidLevel(level)
    && isValidSteps(steps)
    && isValidSummary(summary)
    && isValidDietName(namedi))
  }

