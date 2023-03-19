


using API.Errors;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class BuggesController : BaseApiController
    {
        private readonly StoreContext _context;
        public BuggesController(StoreContext context)
        {
            _context = context;
        }
        [HttpGet("notfound")]
        public ActionResult GetNotFoundRequest()
        {
            var anything = _context.Products.Find(50);
            if (anything == null)
                return NotFound(new ApiResponse(404));
            return Ok();
        }
        [HttpGet("servererror")]
        public ActionResult GetServerError()
        {
            var anything = _context.Products.Find(500);
            var returnTheAnything = anything.ToString();
            return Ok();
        }
        [HttpGet("badrequest")]
        public ActionResult GetBadRequest()
        {
            return BadRequest(new ApiResponse(400));
        }
        [HttpGet("badrequest/{id}")]
        public ActionResult GetNotFoundRequest(int id)
        {
            return BadRequest();
        }


    }
}