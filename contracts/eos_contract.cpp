#include <eosiolib/eosio.hpp>
#include <eosiolib/print.hpp>

using namespace eosio;

class hello : public contract
{
public:
  using contract::contract;

  [[eosio::action]] 
  void hiya() {
    print("Hello from the eos side!");
  }
};

EOSIO_DISPATCH(hello, (hiya))
