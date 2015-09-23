using LoanApi.Models;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
namespace LoanApi.Controllers
{

    public class LoanTypeController : ApiController
    {

        private IContextDb db;
        //
        // GET: /LoanType/
        public LoanTypeController()
        {
            db = new CBAContextDb();
        }
        public LoanTypeController(IContextDb _db)
        {
            db = _db;
        }
        // GET api/<controller>
        [Authorize(Roles = "Admin")]
        public IEnumerable<LoanTypeModel> Get()
        {
            return db.Query<LoanTypeModel>().ToList();
        }
        // GET api/<controller>/1
        [Authorize]
        public IHttpActionResult Get(string type)
        {
            try
            {
                LoanTypeModel _loanTypeModel = db.Query<LoanTypeModel>().Where(x => x.TypeDesc == type).FirstOrDefault();
                return Ok(_loanTypeModel);
            }
            catch (HttpResponseException)
            {
                return NotFound();
            }
        }
        // POST api/<controller>
        [Authorize]
        public IHttpActionResult Post(LoanTypeModel loanTypeModel)
        {
            try
            {
                LoanTypeModel _loanTypeModel = new LoanTypeModel();
                // _loanTypeModel.Id = loanTypeModel.Id;
                _loanTypeModel.TypeDesc = loanTypeModel.TypeDesc;
                _loanTypeModel.IsDeleted = loanTypeModel.IsDeleted;
                _loanTypeModel.CreateDate = loanTypeModel.CreateDate;
                _loanTypeModel.UpdateDate = loanTypeModel.UpdateDate;
                db.Add(_loanTypeModel);
                return Ok();
            }
            catch (HttpResponseException)
            {
                return NotFound();
            }
        }

        // PUT api/<controller>/1
        [Authorize]
        public IHttpActionResult Put(LoanTypeModel loanTypeModel)
        {
            try
            {
                LoanTypeModel _loanTypeModel = db.Query<LoanTypeModel>().Where(x => x.Id == loanTypeModel.Id).FirstOrDefault();
                if (_loanTypeModel == null)
                {
                    return NotFound();
                }
                else
                {
                    _loanTypeModel.TypeDesc = loanTypeModel.TypeDesc;
                    _loanTypeModel.CreateDate = loanTypeModel.CreateDate;
                    _loanTypeModel.UpdateDate = loanTypeModel.UpdateDate;
                    db.SaveChanges(_loanTypeModel);
                    return Ok();
                }
            }
            catch (HttpResponseException)
            {

                return NotFound();
            }
        }
        // DELETE api/<controller>/1
        [Authorize(Roles = "Admin")]
        public IHttpActionResult Delete(int Id)
        {
            try
            {
                LoanTypeModel _loanTypeModel = db.Query<LoanTypeModel>().Where(x => x.Id == Id).FirstOrDefault();
                if (_loanTypeModel == null)
                {
                    return NotFound();
                }
                else
                {
                    _loanTypeModel.IsDeleted = true;
                    db.SaveChanges(_loanTypeModel);
                    return Ok();
                }
            }
            catch (HttpResponseException)
            {

                return NotFound();
            }
        }
    }
}