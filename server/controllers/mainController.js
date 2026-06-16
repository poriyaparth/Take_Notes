// done

/**
 * GET /
 * Homepage 
*/
exports.homepage = async (req, res) => {
  const locals = {
    title: "TakeNotes",
    description: "My first project",
  }
  res.render('index', {
    locals,
    layout: '../views/layouts/front-page'
  });
}


/**
 * GET /
 * About 
*/
exports.about = async (req, res) => {
  const locals = {
    title: "About",
    description: "My first project",
  }
  res.render('about', locals);
}
/**
 * GET /
 * Features
*/
exports.features = async (req, res) => {
  const locals = {
    title: "Features",
    description: "My first project",
  }
  res.render('features', locals);
}
/**
 * GET /
 * FAQs
*/
exports.FAQs = async (req, res) => {
  const locals = {
    title: "FAQs",
    description: "My first project",
  }
  res.render('FAQs', locals);
}