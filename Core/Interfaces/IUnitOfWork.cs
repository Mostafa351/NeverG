using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities;

namespace Core.Interfaces
{
    public interface IUnitOfWork : IDisposable // to dispose the context after finishing
    {
        IGenericRepository<TEntity> Repository<TEntity>() where TEntity : BaseEntity;
        //return number of changes to our DB, that EFcore tracking 
        Task<int> Complete();
    }
}